from pydantic import BaseModel
from datetime import date, time, datetime, timedelta

class LoginModel(BaseModel):
    mobile_no: int
    otp: int

class GenerateOtpModel(BaseModel):
    mobile_no: int

class CreateUserModel(BaseModel):
    name : str
    email : str
    mobile_no: str
    role: str
    user_id : int

class ListUserModel(BaseModel):
    role: str

class AddProductModel(BaseModel):
    product_name : str
    product_fee : int
    user_id : int

class EditProductModel(BaseModel):
    product_id : int
    product_name : str
    product_fee : int
    status: int
    user_id : int

class AddCartModel(BaseModel):
    product_id : int
    product_count : int
    cart_id : str
    service_id : int

class viewCartModel(BaseModel):
    cart_id : str

class deleteCartModel(BaseModel):
    bag_id : int

class editCartModel(BaseModel):
    bag_id : int
    product_count : int

class BookSlotModel(BaseModel):
    user_id : int 
    location : str
    amount : int
    payment_mode : int
    pickup_time : datetime

class UserProfileModel(BaseModel):
    user_id : int 

class BookingPaymentModel(BaseModel):
    payment_mode : int 
    transaction_id : str
    gst_amount : int
    bill_amount : int
    delivery_charge : int
    discount_amount : int
    coupon : str
    status: int

class BookingSlotModel(BaseModel):
    user_id : int
    pick_up_location : str
    pickup_date: date
    pickup_time : time
    drop_location : str
    drop_date : date
    drop_time : time
    status : int 
    payment_id : int

class BookingServiceModel(BaseModel):
    order_id : int
    service_details : list 

class BookingHistoryModel(BaseModel):
    user_id : int

class ListProductModel(BaseModel):
    service_id : int

class SignUpModel(BaseModel):
    name : str
    email : str
    mobile_no : int