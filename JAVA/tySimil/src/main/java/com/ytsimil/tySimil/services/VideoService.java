package com.ytsimil.tySimil.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ytsimil.tySimil.models.VideoModel;
import com.ytsimil.tySimil.repositories.VideoRepository;


@Service
public class VideoService {
	
	@Autowired
	private VideoRepository vr; 
	
	public List<VideoModel> obtenerVideos(){
		
		return vr.findAll();
	}
	
	public Optional<VideoModel> obtenerVideoById(Integer id) {
		
		return vr.findById(id);
	}
	
	public VideoModel crearVideoModel(VideoModel video) {
		
		return vr.save(video);
	}
	
	public String borrarVideoModelById (Integer id)  {
		vr.deleteById(id);
		return "borrado ok";
		
	}
	
	

}
