import { gsap } from "gsap";
import {heartAnimation} from 'heart.js'; 
import {starAnimation} from 'star.js'; 
import {flowerAnimation} from 'flower.js'; 


var mainTl = gsap.timeline();

mainTl
        .add(starAnimation)
        .add(heartAnimation)
        .add(flowerAnimation);