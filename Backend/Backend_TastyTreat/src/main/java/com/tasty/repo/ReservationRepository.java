package com.tasty.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tasty.model.Reservations;

public interface ReservationRepository extends JpaRepository<Reservations, Integer> {

}
