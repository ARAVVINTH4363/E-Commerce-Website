package com.tasty.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tasty.model.Reservations;
import com.tasty.service.ReservationService;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin("*")
public class ReservationController {
	@Autowired
	ReservationService reservationService;

	@GetMapping
	public ResponseEntity<List<Reservations>> getAllCustomers(){
		List<Reservations> customers = reservationService.getAllCustomers();
		return new ResponseEntity<>(customers,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<String> createReservation(@RequestBody Reservations reservations){
		System.out.println(reservations);
		String success = reservationService.createReservation(reservations);
		return new ResponseEntity<>(success,HttpStatus.CREATED);
	}
}
