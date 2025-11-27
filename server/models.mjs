import dayjs from 'dayjs';

function Student(id,username,password,name,surname,school,school_sector,email,
    createdAt = new Date()
) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.school = school;
    this.school_sector = school_sector;
    this.email = email;
    this.createdAt = dayjs(createdAt);
}

function Company(id,username,password,name,sector,address,email,phone,logo_path,
    period,duration,createdAt = new Date()
) {
  this.id = id;
  this.username = username;
  this.password = password;
  this.name = name;
  this.sector = sector;
  this.address = address;
  this.email = email;
  this.phone = phone;
  this.logo_path = logo_path;
  this.period = period;      // estate / inverno
  this.duration = duration;  // 1 o 3 settimane
  this.createdAt = dayjs(createdAt);
}

function Internship(id,student_id,company_id,status = 'pending',start_date = null,
  end_date = null
) {
  this.id = id;
  this.student_id = student_id;
  this.company_id = company_id;
  this.status = status;         // pending / accepted / finished
  this.start_date = start_date ? dayjs(start_date) : null;
  this.end_date = end_date ? dayjs(end_date) : null;
}

//type: student or company
function Review(id,from_type,from_id,to_type,to_id,rating,comment,createdAt = new Date()) {
  this.id = id;
  this.from_type = from_type;
  this.from_id = from_id;
  this.to_type = to_type;
  this.to_id = to_id;
  this.rating = rating;
  this.comment = comment;
  this.createdAt = dayjs(createdAt);
}

export { Student, Company, Internship, Review };
