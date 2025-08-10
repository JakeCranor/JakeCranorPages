import React, { useEffect, useState, useRef, useMemo } from "react";
import "./HomePageSection.css";
import Carousel from "../components/Carousel";
import anime from "animejs/lib/anime.es.js";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const HomePageSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [balloonPopped, setBalloonPopped] = useState(false);
  const [physicsSkills, setPhysicsSkills] = useState([]);
  const [inBalloonSkills, setInBalloonSkills] = useState([]);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [navbarBoundary, setNavbarBoundary] = useState(window.innerHeight);
  const skillRefs = useRef([]);
  const balloonRef = useRef(null);
  const splashRef = useRef(null);
  const contentRef = useRef(null);
  const navbarRef = useRef(null);
  const animationRef = useRef(null);
  const balloonAnimationRef = useRef(null);
  const location = useLocation();

  // Skills to display in the balloon and when it pops
  const skills = [
    {
      name: "GitHub",
      icon: `${process.env.PUBLIC_URL}/github.svg`,
      position: { top: "30%", left: "25%" },
    },
    {
      name: "LinkedIn",
      icon: `${process.env.PUBLIC_URL}/linkedin.svg`,
      position: { top: "50%", left: "65%" },
    },
    { name: "JavaScript", text: "JS", position: { top: "40%", left: "45%" } },
    { name: "React", text: "⚛️", position: { top: "60%", left: "30%" } },
    { name: "TypeScript", text: "TS", position: { top: "25%", left: "60%" } },
    { name: "Java", text: "☕", position: { top: "70%", left: "55%" } },
    { name: "C++", text: "C++", position: { top: "45%", left: "25%" } },
  ];

  // Generate consistent colors for skills (will not change on re-renders)
  const skillColors = useMemo(() => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#FFA62B",
      "#A177FF",
      "#75D701",
      "#FF61A6",
      "#FFCE67",
    ];

    return skills.map(() => colors[Math.floor(Math.random() * colors.length)]);
  }, []); // Empty dependency array means this only runs once

  // Initialize skill refs
  useEffect(() => {
    skillRefs.current = skillRefs.current.slice(0, skills.length);
  }, [skills]);

  // Initialize skills with physics properties when component mounts
  useEffect(() => {
    if (skills.length > 0 && !balloonPopped) {
      // Initialize skill balls inside the balloon with exact positions
      const balloonRect = { width: 220, height: 260 }; // Default size before ref is available

      // Position balls near the bottom of the balloon but not touching the edge
      const bottomY = balloonRect.height * 0.8; // Position closer to bottom

      const skillWidth = 40; // Fixed width for skill balls
      let newBalloonSkills = [];

      // Maximum number of balls per row based on balloon width
      const maxPerRow = Math.floor(balloonRect.width / skillWidth);

      // Simple grid arrangement - fixed positions, no overlap
      if (skills.length <= maxPerRow) {
        // Single row arrangement if few balls
        const rowWidth = skills.length * skillWidth;
        const startX = (balloonRect.width - rowWidth) / 2;

        skills.forEach((skill, index) => {
          newBalloonSkills.push({
            ...skill,
            id: index,
            color: skillColors[index],
            posX: startX + index * skillWidth,
            posY: bottomY - skillWidth,
            velocityX: 0,
            velocityY: 0,
            rotation: 0,
            width: skillWidth,
            height: skillWidth,
            opacity: 0.5, // Even more faint inside balloon
          });
        });
      } else {
        // Two-row arrangement for more balls
        const firstRowCount = Math.ceil(skills.length / 2);
        const secondRowCount = skills.length - firstRowCount;

        // First row (bottom)
        const firstRowWidth = firstRowCount * skillWidth;
        const firstRowStartX = (balloonRect.width - firstRowWidth) / 2;

        // Add first row
        for (let i = 0; i < firstRowCount; i++) {
          newBalloonSkills.push({
            ...skills[i],
            id: i,
            color: skillColors[i],
            posX: firstRowStartX + i * skillWidth,
            posY: bottomY - skillWidth,
            velocityX: 0,
            velocityY: 0,
            rotation: 0,
            width: skillWidth,
            height: skillWidth,
            opacity: 0.5, // Even more faint inside balloon
          });
        }

        // Second row (top)
        if (secondRowCount > 0) {
          const secondRowWidth = secondRowCount * skillWidth;
          const secondRowStartX = (balloonRect.width - secondRowWidth) / 2;

          for (let i = 0; i < secondRowCount; i++) {
            const index = i + firstRowCount;
            newBalloonSkills.push({
              ...skills[index],
              id: index,
              color: skillColors[index],
              posX: secondRowStartX + i * skillWidth,
              posY: bottomY - skillWidth * 2 + 5, // Slight overlap for visual depth
              velocityX: 0,
              velocityY: 0,
              rotation: 0,
              width: skillWidth,
              height: skillWidth,
              opacity: 0.5, // Even more faint inside balloon
            });
          }
        }
      }

      setInBalloonSkills(newBalloonSkills);
    }
  }, [skills, balloonPopped]);

  // Ensure no animation happens for in-balloon skills
  useEffect(() => {
    // Deliberately empty - no animations or handlers
    return () => {};
  }, [balloonPopped, inBalloonSkills]);

  // Remove any animation for the balloon before it's popped
  // We want the balls to remain completely static
  useEffect(() => {
    // Deliberately empty - no animations or handlers
    return () => {};
  }, [balloonPopped, inBalloonSkills]);

  // Handle window resize and calculate navbar boundary
  useEffect(() => {
    const calculateNavbarBoundary = () => {
      // Set default boundary to 90% of screen height
      let boundary = window.innerHeight * 0.9;

      // If navbar is available, use its position as the boundary
      if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        boundary = navbarRect.top;
      } else if (contentRef.current) {
        // Otherwise try to use content section as a reference
        const contentRect = contentRef.current.getBoundingClientRect();
        boundary = contentRect.top;
      }

      setNavbarBoundary(boundary);
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial calculation
    calculateNavbarBoundary();

    // Recalculate on resize
    const handleResize = () => {
      calculateNavbarBoundary();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if coming from Home button (skip splash)
    if (location.state && location.state.showSplash === false) {
      // Scroll to content section immediately without animation
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "auto", // No animation
        });
      }, 0);
    } else if (location.key) {
      // For navigation from other pages that didn't set state
      // If it has a location key, it means it's not the initial page load
      if (!location.state || !location.state.showSplash) {
        // Skip splash for navigation from other pages without explicit showSplash=true
        setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "auto", // No animation
          });
        }, 0);
      }
    } else {
      // For direct URL access or Jake Cranor button (with showSplash=true), show splash
      window.scrollTo(0, 0);
    }

    // Clear the state after using it
    if (location.state) {
      window.history.replaceState({}, document.title);
    }

    // Handle scroll events
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  // Physics animation loop (after balloon pop)
  useEffect(() => {
    if (balloonPopped && physicsSkills.length > 0) {
      // Physics parameters
      const gravity = 0.5;
      const friction = 0.98;
      const elasticity = 0.7;

      // Get most up-to-date navbar boundary
      const updateNavbarBoundary = () => {
        if (navbarRef.current) {
          const navbarRect = navbarRef.current.getBoundingClientRect();
          return navbarRect.top;
        }
        return window.innerHeight * 0.85; // Fallback value
      };

      let currentNavbarBoundary = updateNavbarBoundary();

      // Animation frame reference
      let animationFrameId;

      const animate = () => {
        // Update navbar boundary periodically to handle window resize or scroll
        if (Math.random() < 0.05) {
          // Update boundary occasionally to avoid performance hit
          currentNavbarBoundary = updateNavbarBoundary();
        }

        setPhysicsSkills((prevSkills) => {
          // First update positions and velocities
          let updatedSkills = prevSkills.map((skill) => {
            // Apply gravity
            let velocityY = skill.velocityY + gravity;

            // Apply friction
            let velocityX = skill.velocityX * friction;

            // Update position
            let nextY = skill.posY + velocityY;
            let nextX = skill.posX + velocityX;

            // CRITICAL FIX: Enforce strict boundary checking with the navbar
            // Make sure we're always checking against the most current navbar boundary
            const effectiveBottomBoundary =
              currentNavbarBoundary - skill.height;

            // Check for collision with navbar (bottom of screen)
            if (nextY >= effectiveBottomBoundary) {
              // Bounce off the navbar with elasticity
              nextY = effectiveBottomBoundary;
              velocityY = -velocityY * elasticity;

              // Apply horizontal friction when hitting the ground to slow down
              velocityX = velocityX * 0.9;

              // Safety check: if very small velocity after bounce, just stop
              if (Math.abs(velocityY) < 0.8) {
                velocityY = 0;
                // Ensure it rests exactly on boundary
                nextY = effectiveBottomBoundary;
              }
            }

            // Check for collision with screen edges
            const rightBoundary = window.innerWidth - skill.width;
            if (nextX < 0) {
              nextX = 0;
              velocityX = -velocityX * elasticity;
            } else if (nextX > rightBoundary) {
              nextX = rightBoundary;
              velocityX = -velocityX * elasticity;
            }

            // Apply a small constant minimum Y velocity to ensure balls
            // don't get stuck floating above the navbar boundary
            if (Math.abs(velocityY) < 0.1 && nextY < effectiveBottomBoundary) {
              velocityY = 0.1;
            }

            return {
              ...skill,
              posX: nextX,
              posY: nextY,
              velocityX: velocityX,
              velocityY: velocityY,
              rotation: skill.rotation + velocityX * 0.2, // Rotate based on horizontal velocity
            };
          });

          // Handle collisions between balls
          for (let i = 0; i < updatedSkills.length; i++) {
            for (let j = i + 1; j < updatedSkills.length; j++) {
              const ball1 = updatedSkills[i];
              const ball2 = updatedSkills[j];

              // Calculate centers
              const ball1CenterX = ball1.posX + ball1.width / 2;
              const ball1CenterY = ball1.posY + ball1.height / 2;
              const ball2CenterX = ball2.posX + ball2.width / 2;
              const ball2CenterY = ball2.posY + ball2.height / 2;

              // Calculate distance between centers
              const dx = ball2CenterX - ball1CenterX;
              const dy = ball2CenterY - ball1CenterY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              // Check for collision (if distance is less than sum of radii)
              const minDistance = (ball1.width + ball2.width) / 2;

              if (distance < minDistance) {
                // Calculate collision normal
                const nx = dx / distance;
                const ny = dy / distance;

                // Calculate relative velocity
                const relVelX = ball2.velocityX - ball1.velocityX;
                const relVelY = ball2.velocityY - ball1.velocityY;

                // Calculate relative velocity in terms of normal direction
                const velAlongNormal = relVelX * nx + relVelY * ny;

                // Do not resolve if objects are moving away from each other
                if (velAlongNormal > 0) continue;

                // Calculate impulse scalar
                const impulseScalar = -(1 + elasticity) * velAlongNormal;

                // Calculate impulse
                const impulseX = impulseScalar * nx;
                const impulseY = impulseScalar * ny;

                // Apply impulse
                updatedSkills[i] = {
                  ...updatedSkills[i],
                  velocityX: ball1.velocityX - impulseX,
                  velocityY: ball1.velocityY - impulseY,
                };

                updatedSkills[j] = {
                  ...updatedSkills[j],
                  velocityX: ball2.velocityX + impulseX,
                  velocityY: ball2.velocityY + impulseY,
                };

                // Move balls apart to prevent sticking
                const overlap = minDistance - distance;
                const moveX = nx * overlap * 0.5;
                const moveY = ny * overlap * 0.5;

                updatedSkills[i] = {
                  ...updatedSkills[i],
                  posX: updatedSkills[i].posX - moveX,
                  posY: updatedSkills[i].posY - moveY,
                };

                updatedSkills[j] = {
                  ...updatedSkills[j],
                  posX: updatedSkills[j].posX + moveX,
                  posY: updatedSkills[j].posY + moveY,
                };

                // Final sanity check: ensure no ball is below navbar boundary
                if (
                  updatedSkills[i].posY >
                  currentNavbarBoundary - updatedSkills[i].height
                ) {
                  updatedSkills[i] = {
                    ...updatedSkills[i],
                    posY: currentNavbarBoundary - updatedSkills[i].height,
                    velocityY: -updatedSkills[i].velocityY * elasticity,
                  };
                }

                if (
                  updatedSkills[j].posY >
                  currentNavbarBoundary - updatedSkills[j].height
                ) {
                  updatedSkills[j] = {
                    ...updatedSkills[j],
                    posY: currentNavbarBoundary - updatedSkills[j].height,
                    velocityY: -updatedSkills[j].velocityY * elasticity,
                  };
                }
              }
            }
          }

          // Final pass to ensure all balls stay within screen boundaries
          updatedSkills = updatedSkills.map((skill) => {
            // Ensure balls never go below navbar boundary
            if (skill.posY > currentNavbarBoundary - skill.height) {
              return {
                ...skill,
                posY: currentNavbarBoundary - skill.height,
                velocityY:
                  skill.velocityY < 0
                    ? skill.velocityY
                    : -skill.velocityY * elasticity,
              };
            }
            return skill;
          });

          return updatedSkills;
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [balloonPopped, physicsSkills.length]);

  // Create physics-based skills when balloon is popped
  const handleBalloonPop = () => {
    if (balloonRef.current) {
      // Cancel any existing animation frames
      if (balloonAnimationRef.current) {
        cancelAnimationFrame(balloonAnimationRef.current);
      }

      // Recalculate navbar boundary at time of pop
      const calculateCurrentNavbarBoundary = () => {
        if (navbarRef.current) {
          const navbarRect = navbarRef.current.getBoundingClientRect();
          return navbarRect.top;
        }
        // Fallback value if navbar ref isn't available
        return window.innerHeight * 0.85;
      };

      const currentNavbarBoundary = calculateCurrentNavbarBoundary();

      // Get the balloon position for accurate explosion effect
      const balloonRect = balloonRef.current.getBoundingClientRect();
      const balloonCenterX = balloonRect.left + balloonRect.width / 2;
      const balloonCenterY = balloonRect.top + balloonRect.height / 2;

      // Create physics-based skills from the current state of inBalloonSkills
      const newPhysicsSkills = inBalloonSkills.map((skill) => {
        // Convert balloon-relative positions to absolute screen positions
        const posX = balloonRect.left + skill.posX;
        const posY = balloonRect.top + skill.posY;

        // Calculate direction and distance from balloon center for explosion effect
        const skillCenterX = posX + skill.width / 2;
        const skillCenterY = posY + skill.height / 2;

        const dx = skillCenterX - balloonCenterX;
        const dy = skillCenterY - balloonCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Normalize direction vector
        const dirX = distance > 0 ? dx / distance : 0;
        const dirY = distance > 0 ? dy / distance : 0;

        // Calculate explosion force based on proximity to center
        // Balls closer to center get more force
        const proximityFactor =
          Math.min(distance, balloonRect.width / 2) / (balloonRect.width / 2);
        const explosionForce = 15 + Math.random() * 10; // Basic explosion force

        // Adjust direction - ensure balls have enough downward momentum
        const adjustedDirX = dirX + (Math.random() * 0.4 - 0.2); // Add some randomness
        const adjustedDirY = Math.max(0.2, dirY + 0.3); // Ensure downward trajectory

        // Calculate velocities - ensuring good distribution
        const velocityX =
          adjustedDirX * explosionForce * (1 - proximityFactor * 0.5);
        const velocityY =
          adjustedDirY * explosionForce * (1 - proximityFactor * 0.7);

        // Ensure rotation is set to visible values
        const rotation = Math.random() * 360;

        return {
          ...skill,
          posX,
          posY,
          velocityX,
          velocityY,
          rotation,
          width: skill.width,
          height: skill.height,
        };
      });

      // Try to play pop sound
      try {
        const popSound = new Audio("/pop-sound.mp3");
        popSound.volume = 0.5;
        popSound.play().catch(() => {
          console.log("Sound playback prevented by browser");
        });
      } catch (e) {
        console.log("Error playing sound", e);
      }

      // Update state
      setPhysicsSkills(newPhysicsSkills);
      setBalloonPopped(true);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Calculate opacity and transform based on scroll position
  const opacity = Math.max(0, 1 - scrollPosition / 500);
  const translateY = scrollPosition * 0.5;
  const scale = 1 - scrollPosition / 1000;

  return (
    <>
      {/* Splash Screen */}
      <div className="splash-screen" ref={splashRef} style={{ opacity }}>
        <div
          className="splash-content"
          style={{
            transform: `translateY(${translateY}px) scale(${scale})`,
          }}>
          {/* Dog image */}
          <div className="splash-image-container">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Cute dog"
              className="splash-image"
            />
          </div>

          <div className="splash-text">
            <h1>About Me</h1>
            <p className="splash-description">
              I am Jake Cranor, a Computer Science major at Georgia Tech with a
              focus in People and Intelligence.
            </p>
            <button className="explore-button" onClick={scrollToContent}>
              Explore My Work
            </button>
          </div>
        </div>

        {/* Balloon with skills at the top */}
        <div className="balloon-section">
          {!balloonPopped ? (
            <div
              className="balloon-container"
              onClick={handleBalloonPop}
              ref={balloonRef}>
              <div className="balloon">
                {/* Skill balls inside balloon - hidden until popped */}
                <div className="balloon-text">Pop me to see my skills!</div>
              </div>
              <div className="balloon-string"></div>
            </div>
          ) : (
            <div className="physics-container">
              {/* Physics-based skills after balloon pop */}
              {physicsSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="physics-skill popped"
                  style={{
                    top: skill.posY + "px",
                    left: skill.posX + "px",
                    backgroundColor: skill.color,
                    width: skill.width + "px",
                    height: skill.height + "px",
                    transform: `rotate(${skill.rotation}deg)`,
                  }}>
                  {skill.icon ? (
                    <img src={skill.icon} alt="" className="skill-icon" />
                  ) : (
                    <span className="skill-text">{skill.text}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Original Content with Navbar */}
      <div className="original-content" ref={contentRef}>
        <div className="content-wrapper">
          {/* Navbar positioned under the splash screen */}
          <Navbar className="home-navbar" ref={navbarRef} />

          {/* Original home page content */}
          <section className="home-page-section">
            <Carousel />
            <section className="footer-section">
              <div className="textarea-field">
                <b className="label">Hello!</b>
                <div className="description">Description</div>
                <div className="textarea">
                  <div className="value">
                    <p className="Subtext">
                      I am Jake Cranor, and this is my Personal Portfolio
                      Website!
                    </p>
                    <p className="as-a-computer">
                      As a Computer Science major at Georgia Tech, I am pursuing
                      my passion for software engineering and developing my
                      skills in Object-Oriented Programming and Software
                      Development. My major has a focus in People and
                      Intelligence and I am set to graduate in May of 2025. I am
                      currently working a part-time internship at Cox
                      Enterprises for Intelligent Automation where I can apply
                      my knowledge, skills, and passion to real-world projects
                      and challenges.
                    </p>
                  </div>
                  <img className="drag-icon" alt="" src="/drag.svg" />
                </div>
                <div className="description">Hint</div>
              </div>
              <footer className="button-list">
                <a
                  href="https://github.com/JakeCranor"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="github-icon"
                    loading="lazy"
                    alt="GitHub"
                    src={`${process.env.PUBLIC_URL}/github.svg`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jakecranor"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="github-icon"
                    loading="lazy"
                    alt="LinkedIn"
                    src={`${process.env.PUBLIC_URL}/linkedin.svg`}
                  />
                </a>
              </footer>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePageSection;
