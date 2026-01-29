const tl=gsap.timeline();

  tl.to(".loader span", {
    opacity: 0,
    x: 40,
    duration: 0.25,
    stagger: 0.15,   
    ease: "power2.out"
  })


  .to(".loader", {
    y: "-100%",
    duration: 0.3,
    delay: 0.5,     
    ease: "power2.inOut"
  });

tl.from("h2",{
    y:-30,
    rotate:250,
    delay:1,
    duration:0.2,
    opacity:0,
    yoyo:true
})
tl.from(".link",{
    y:-10,
    rotate:10,
    delay:0.1,
    duration:0.4,
    opacity:0,
    stagger:0.6
})
gsap.fromTo(".text h1",{

    x:-500
},
{
    x:500,   
    duration: 5,
    ease: "linear",
    repeat: -1,    
    yoyo: true   
  }
);
gsap.registerPlugin(ScrollTrigger);


gsap.to(".smallimg", {
  x:500,
  ease: "none",
  scrollTrigger: {
    trigger: ".part2",
    start: "top bottom",
    end: "bottom top",
    scrub: true,  
  }
});
gsap.to(".smallimg2", {
  x: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".part3",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});


gsap.to(".smallimg3",{
  x: 500, 
  ease: "none",
  scrollTrigger: {
    trigger: ".part4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,  
  }
});
gsap.to(".smallimg4",{
  x: -500, 
  ease: "none",
  scrollTrigger: {
    trigger: ".part4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,  
  }
});

gsap.to(".smallimg5",{
  x: 500,
  ease: "none",
  scrollTrigger: {
    trigger: ".part5",
    start: "top bottom",
    end: "bottom top",
    scrub: true,  
  }
});

gsap.registerPlugin(ScrollTrigger);

const breakpoints = gsap.matchMedia();

breakpoints.add("(min-width: 1200px)", () => {

  gsap.to(".smallimg", {
    x: 500,
    scrollTrigger: {
      trigger: ".part2",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".smallimg2", {
    x: -300,
    scrollTrigger: {
      trigger: ".part3",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".smallimg3", {
    x: 500,
    scrollTrigger: {
      trigger: ".part4",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".smallimg4", {
    x: -500,
    scrollTrigger: {
      trigger: ".part4",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".smallimg5", {
    x: 500,
    scrollTrigger: {
      trigger: ".part5",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

});

breakpoints.add("(max-width: 1199px) and (min-width: 901px)", () => {

  gsap.to(".smallimg", {
    x: 300,
    scrollTrigger: {
      trigger: ".part2",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".smallimg2", {
    x: -200,
    scrollTrigger: {
      trigger: ".part3",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  gsap.to(".smallimg3", {
    x: 300,
    scrollTrigger: {
      trigger: ".part4",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

});

breakpoints.add("(max-width: 900px) and (min-width: 501px)", () => {

  gsap.to(".smallimg", {
    x: 150,
    scrollTrigger: {
      trigger: ".part2",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

});

breakpoints.add("(max-width: 500px)", () => {

  gsap.to(".smallimg", {
    x: 80,
    scrollTrigger: {
      trigger: ".part2",
      start: "top 80%",
      end: "bottom top",
      scrub: true
    }
  });

});
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("eventDate").setAttribute("min", today);
function getUserLocation() {
  let map = null;
let marker = null;
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      document.getElementById("lat").innerText = lat.toFixed(6);
      document.getElementById("lng").innerText = lng.toFixed(6);

      
      if (map === null) {
        map = L.map("map").setView([lat, lng], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        marker = L.marker([lat, lng])
          .addTo(map)
          .bindPopup("📍 You are here")
          .openPopup();

        
        setTimeout(() => {
          map.invalidateSize();
        }, 200);
      } 
      
      else {
        map.setView([lat, lng], 15);
        marker.setLatLng([lat, lng]);
      }
    },
    function () {
      alert("Location permission denied ❌");
    }
  );
}


function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
