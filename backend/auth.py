from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from db import get_db, UserDB

router = APIRouter()

class User(BaseModel):
    email: str
    password: str

@router.post("/register")
def register(user: User, db: Session = Depends(get_db)):
    if db.query(UserDB).filter(UserDB.email == user.email).first():
        raise HTTPException(status_code=400, detail="User exists")
    db_user = UserDB(email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    return {"msg": "Registered"}

@router.post("/login")
def login(user: User, db: Session = Depends(get_db)):
    db_user = db.query(UserDB).filter(
        UserDB.email == user.email, UserDB.password == user.password
    ).first()
    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"msg": "Logged in", "token": "dummy-token"}