package com.tasty.service;

import java.util.List;

import com.tasty.model.Reservations;

public interface ReservationService {

	List<Reservations> getAllCustomers();

	String createReservation(Reservations reservations);

}
