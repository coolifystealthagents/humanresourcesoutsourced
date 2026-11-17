'use client';
import {useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
export default function PageMotion(){useEffect(()=>{gsap.registerPlugin(ScrollTrigger);const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.renew-service img, .renew-service-photo img').forEach(image=>{gsap.fromTo(image,{scale:1.04},{scale:1,ease:'none',scrollTrigger:{trigger:image,start:'top bottom',end:'center center',scrub:true}})});gsap.utils.toArray<HTMLElement>('.renew-process article').forEach(el=>{gsap.fromTo(el,{y:15},{y:0,duration:.6,scrollTrigger:{trigger:el,start:'top 95%',once:true}})});});return()=>ctx.revert()});return()=>mm.revert()},[]);return null}
