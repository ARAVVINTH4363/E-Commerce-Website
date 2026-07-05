package com.tasty.model;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Reservations {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String fullName;
	private String phone;
	private String email;
	private String guests;
	private LocalDate date;
    private LocalTime time;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGuests() {
		return guests;
	}
	public void setGuests(String guests) {
		this.guests = guests;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	public Reservations(Integer id, String fullName, String phone, String email, String guests, LocalDate date, LocalTime time) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.phone = phone;
		this.email = email;
		this.guests = guests;
		this.date = date;
		this.time = time;
	}
    
    public Reservations() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Reservations [id=" + id + ", fullName=" + fullName + ", phone=" + phone + ", email=" + email
				+ ", guests=" + guests + ", date=" + date + ", time=" + time + "]";
	}
    
    
}
