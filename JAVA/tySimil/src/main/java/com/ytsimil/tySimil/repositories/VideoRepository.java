package com.ytsimil.tySimil.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ytsimil.tySimil.models.VideoModel;

@Repository
public interface VideoRepository extends JpaRepository <VideoModel, Integer> {

}
