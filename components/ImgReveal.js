'use client';

import React from 'react';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect } from 'react';

function ImgReveal() {
  gsap.registerPlugin(ScrollTrigger);

  let lenis;

  useEffect(() => {
    const gridItem = document.querySelectorAll('.grid-item');

    const SmoothScroll = () => {
      lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      });

      const scrollFn = (time) => {
        lenis.raf(time);

        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };
    const ScrollAni = () => {
      gridItem.forEach((item) => {
        gsap
          .timeline({
            defaults: {
              ease: 'power4',
            },
            scrollTrigger: {
              trigger: item,
              start: 'top bottom-=15%',
              end: '+=100%',
              scrub: true,
            },
          })
          .fromTo(
            item.querySelector('.grid-item-img'),
            {
              scale: 0,

              transformOrigin: `0% 0%`,
            },
            {
              scale: 1,
            }
          )
          .fromTo(
            item.querySelector('.grid-img'),
            {
              scale: 5,
              transformOrigin: `0% 0%`,
            },
            {
              scale: 1,
            },
            0
          )
          .fromTo(
            item.querySelector('.grid-item-caption'),
            {
              yPercent: 200,
              xPercent: 50,
              opacity: 0,
            },
            {
              ease: 'power1',
              yPercent: 0,
              xPercent: 0,
              opacity: 1,
            },
            0
          );
      });
    };

    const init = () => {
      SmoothScroll();
      ScrollAni();
    };

    init();
  });
  return (
    <div>
      <div className="w-full grid-cols-[100%] grid relative mt-[10vh] mx-[auto] mb-[40vh] justify-center items-center ml-[190px]">
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">EIFFEL TOWER , PARIS</div>
            <img
              src="/images/1.jpeg"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">TAJMAHAL , INDIA</div>
            <img
              src="/images/2.jpeg"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">STONE HENGE , UK</div>
            <img
              src="/images/3.jpeg"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">COLOSSEUM , ROME</div>
            <img
              src="/images/4.jpeg"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">PYRAMID OF GIZA , EGYPT</div>
            <img
              src="/images/5.jpeg"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
        <div className="grid-item relative m-0">
          <div className="grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]">
            <div className="grid-item-caption">INDIA GATE , INDIA</div>
            <img
              src="/images/6.jpeg"
              className="grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgReveal;
