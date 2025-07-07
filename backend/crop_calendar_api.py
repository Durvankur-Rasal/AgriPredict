import json
from fastapi import APIRouter, HTTPException
from sqlalchemy import create_engine, Column, Integer, String, Date, select
from sqlalchemy.orm import declarative_base, sessionmaker
from datetime import date

router = APIRouter()

# Load static crop calendar data (for demo)
with open('crop_calendar_data.json') as f:
    crop_calendar_data = json.load(f)

DATABASE_URL = "sqlite:///./reminders.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)

class Reminder(Base):
    __tablename__ = "reminders"
    id = Column(Integer, primary_key=True, index=True)
    activity = Column(String, nullable=False)
    date = Column(String, nullable=False)  # Store as string for simplicity

Base.metadata.create_all(bind=engine)

@router.get("/crop_calendar")
def get_crop_calendar(crop: str, district: str):
    # For demo, just return by crop name
    data = crop_calendar_data.get(crop.lower())
    if not data:
        raise HTTPException(status_code=404, detail="No calendar found for this crop.")
    return data

@router.post("/add_reminder")
def add_reminder(reminder: dict):
    db = SessionLocal()
    db_reminder = Reminder(activity=reminder["activity"], date=reminder["date"])
    db.add(db_reminder)
    db.commit()
    db.refresh(db_reminder)
    db.close()
    return {"status": "ok", "id": db_reminder.id}

@router.get("/reminders")
def get_reminders():
    db = SessionLocal()
    reminders = db.query(Reminder).all()
    db.close()
    return [{"activity": r.activity, "date": r.date} for r in reminders]