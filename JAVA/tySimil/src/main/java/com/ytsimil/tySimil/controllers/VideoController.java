package com.ytsimil.tySimil.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ytsimil.tySimil.models.VideoModel;
import com.ytsimil.tySimil.services.VideoService;

@RestController
@RequestMapping("/")
public class VideoController {
	
	@Autowired
	private VideoService vs;
	
	@GetMapping("/videos")
	public ResponseEntity <List<VideoModel>> getVideos(){
		return ResponseEntity.ok(vs.obtenerVideos());
	}
	
	@GetMapping("/videos/{id}")
	public ResponseEntity<Optional<VideoModel>> getVideoById(@PathVariable Integer id) {
		
		return ResponseEntity.ok(vs.obtenerVideoById(id));
	}
	
	@PostMapping()
	public ResponseEntity<VideoModel> createVideo(@RequestBody VideoModel video) {
		
		return new ResponseEntity<>(vs.crearVideoModel(video), HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateVideoById(@PathVariable Integer id, @RequestBody VideoModel video) {
		
		return null;
	}
	@DeleteMapping("/id")
	public ResponseEntity<String> deleteVideo(@PathVariable Integer id){
		
		return ResponseEntity.ok(vs.borrarVideoModelById(id));
	}
	

}
