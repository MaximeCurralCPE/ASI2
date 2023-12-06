package com.asi2.example.tools;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;

import com.asi2.example.a.model.ChuckApiModel;
import com.asi2.example.b.model.BImgDTO;

public class ApiCallerTool {
	public final static String B_IMG_URL_BASE="http://localhost:8081";
	public final static String B_IMG_URL_ACTION_RANDOM="/random";
	public final static String CHUCK_URL_BASE="https://api.chucknorris.io/jokes/random";
	
	
	public static BImgDTO callBImgGetRandom() {
		//  Send operation Result to Notification Server
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
	    headers.setContentType(MediaType.APPLICATION_JSON);
	    BImgDTO bImgResponse = restTemplate.getForObject(B_IMG_URL_BASE + B_IMG_URL_ACTION_RANDOM, BImgDTO.class);
		return bImgResponse;
	}

	
	public static ChuckApiModel callChuckApi() {
	//  Send operation Result to Notification Server
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
		    headers.setContentType(MediaType.APPLICATION_JSON);
		    ChuckApiModel chuckResponse = restTemplate.getForObject(CHUCK_URL_BASE, ChuckApiModel.class);
			return chuckResponse;
	}

}
