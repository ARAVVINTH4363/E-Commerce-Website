package com.tasty.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasty.model.Reservations;
import com.tasty.repo.ReservationRepository;
import com.tasty.service.ReservationService;

@Service
public class ReservationServiceImpl implements ReservationService{
	@Autowired
	ReservationRepository reservationRepository;

	@Override
	public List<Reservations> getAllCustomers() {
		// TODO Auto-generated method stub
		return reservationRepository.findAll();
	}

	@Override
	public String createReservation(Reservations reservations) {
		Reservations reservations1 = reservationRepository.save(reservations);
		if(reservations1!=null) {
			return "Reservation created successfully...!!!";
		}
		return "Reservation not created...!!!";
	}

}
