from fastapi import APIRouter , HTTPException
from jose import jwt
from datetime import datetime, timedelta
from modal import LoginModel
from modal import GenerateOtpModel
from modal import CreateUserModel
from modal import ListUserModel
from modal import AddProductModel
from modal import EditProductModel
from modal import AddCartModel
from modal import viewCartModel
from modal import deleteCartModel
from modal import editCartModel
from modal import BookSlotModel
from modal import UserProfileModel
from modal import BookingPaymentModel
from modal import BookingSlotModel
from modal import BookingServiceModel
from modal import BookingHistoryModel
import os
import random
from dotenv import load_dotenv
from supabase import create_client, Client
from fastapi import Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError
from datetime import datetime

router = APIRouter()
load_dotenv()

JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
JWT_ALGO = os.getenv("JWT_ALGO")
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUBABASE_KEY = os.getenv("SUBABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUBABASE_KEY)
security = HTTPBearer()

def jwt_token(data: dict):
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=30)
    return jwt.encode(payload, JWT_SECRET_KEY, algorithm=JWT_ALGO)

def verify_access_token(
    credentials: HTTPAuthorizationCredentials = Depends(security)
):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, JWT_SECRET_KEY, algorithms=[JWT_ALGO])
        return payload
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired access token"
        )

class Login:

    def generate_otp(self, data):
        response = supabase.table('service_user_details').select("*").eq("mobile_no",data.mobile_no).execute()
        if not response.data:
            raise HTTPException(status_code=400, detail="User not found")
        otp = "12345"
        return {"message": "OTP sent successfully","OTP" : otp ,"code" : "000" }

    def sign_in(self, data):
        user_otp = 12345
        if not user_otp:
            raise HTTPException(status_code=400, detail="OTP not requested")

        if user_otp != data.otp:
            raise HTTPException(status_code=401, detail="Invalid OTP")
        token = jwt_token({
            "mobile_no": data.mobile_no
        })

        return {
            "message": "Sign in successful",
            "mobile_no": data.mobile_no,
            "access_token": token,
            "token_type": "bearer",
            "code" : "000"
        }
    
class Manage_cart:

    def add_cart(self,data):
        response = (supabase.table("service_user_bag").insert({"product_id": data.product_id, "product_count": data.product_count, "bag_owner": data.user_id , "service_id" : data.service_id}).execute())
        if not response.data:
            raise HTTPException(status_code=400, detail="Process Failed Try Again")
        print(response.data)
        return {
            "message": "Product added to the cart",
            "code" : "000"
        }
    
    def view_cart(self,data):
         response = supabase.table("service_user_bag").select("id,bag_owner,product_count,product_details(product_name,id,banner_img),service_details(name,id)").eq("bag_owner",data.user_id).execute()
         return response.data
    
    def delete_cart(self,data):
        response = (supabase.table("service_user_bag").delete().eq("id", data.bag_id).execute())
        return {
            "message": "Product deleted from the cart",
            "code" : "000"
        }
    
    def edit_cart(self,data):
        response = (supabase.table("service_user_bag").update({"product_count": data.product_count}).eq("id", data.bag_id).execute())
        return {
            "message": "Product count Updated Successfully",
            "code" : "000"
        }
    
    def book_slot(self,data):
         response = (supabase.table("slot_details").insert({"user_id": data.user_id, "location": data.location, "amount": data.amount, "payment_mode": data.payment_mode, "pickup_time": data.pickup_time}).execute())
         if not response.data:
            raise HTTPException(status_code=400, detail="Process Failed Try Again")
         return {
            "message": "Slot Created Successfully",
            "code" : "000"
        }
    
class Manage_user:

    def user_profile(self,data):
       response = supabase.table("service_user_details").select("name,email,mobile_no").eq("id",data.user_id).execute()
       return response.data

class Manage_booking:

    def booking_payment(self,data):
         payment_reponse = (supabase.table("booking_payment_details").insert({"payment_mode": data.payment_mode, "transaction_id": data.transaction_id, "gst_amount": data.gst_amount, "bill_amount": data.bill_amount, "delivery_charge": data.delivery_charge, "discount_amount": data.discount_amount, "coupon": data.coupon , "status" : data.status}).execute())
         return payment_reponse.data

    def booking_slot(self, data):
            slot_response = (
                supabase
                .table("booking_details")
                .insert({
                    "user_id": data.user_id,
                    "pickup_location": data.pick_up_location,
                    "pickup_date": data.pickup_date.isoformat(),   
                    "pickup_time": data.pickup_time.strftime("%H:%M:%S"),  
                    "drop_location": data.drop_location,
                    "drop_date": data.drop_date.isoformat(),      
                    "drop_time": data.drop_time.strftime("%H:%M:%S"),      
                    "status": data.status,
                    "payment_id": data.payment_id
                })
                .execute()
            )
            return slot_response.data
    
    def booking_bag(self,data):
         for service in data.service_details:
           service_data = service.split("|")
           payment_reponse = (supabase.table("booking_service_details").insert({"order_id": data.order_id, "service_id": service_data[0], "product_id": service_data[1], "product_count": service_data[2]}).execute())
         return {
            "message": "success",
            "code" : "000"
        }
    
    def booking_history(self,data): 
        booking =  supabase.table("booking_details").select("*,booking_payment_details(*)").eq("id",data.user_id).execute()
        for slot in booking.data:
            booked_service = supabase.table("booking_service_details").select("service_details(name),product_details(product_name),product_count").eq("order_id",slot['id']).execute()
            slot['service'] =  booked_service.data
            return slot
         

Login = Login()
Manage_cart = Manage_cart()
Manage_user = Manage_user()
Manage_booking = Manage_booking()

@router.post("/generate_otp")
def generate_otp(data: GenerateOtpModel):
    return Login.generate_otp(data)

@router.post("/sign_in")
def sign_in(data: LoginModel):
    return Login.sign_in(data)

@router.post("/add_cart")
def add_cart(data: AddCartModel):
    return Manage_cart.add_cart(data)

@router.post("/view_cart")
def view_cart(data: viewCartModel):
    return Manage_cart.view_cart(data)

@router.post("/delete_cart")
def delete_cart(data: deleteCartModel):
    return Manage_cart.delete_cart(data)

@router.post("/edit_cart")
def edit_cart(data: editCartModel):
    return Manage_cart.edit_cart(data)

@router.post("/book_slot")
def book_slot(data: BookSlotModel):
    return Manage_cart.book_slot(data)

@router.post("/user_profile")
def user_profile(data: UserProfileModel):
    return Manage_user.user_profile(data)

@router.post("/booking_payment")
def booking_payment(data: BookingPaymentModel):
    return Manage_booking.booking_payment(data)

@router.post("/booking_slot")
def booking_slot(data: BookingSlotModel):
    return Manage_booking.booking_slot(data)

@router.post("/booking_bag")
def booking_bag(data: BookingServiceModel):
    return Manage_booking.booking_bag(data)

@router.post("/booking_history")
def booking_history(data: BookingHistoryModel):
    return Manage_booking.booking_history(data)
