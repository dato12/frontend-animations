import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const GsapTimeline = () => {
    // TODO: Implement the gsap timeline
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
    });

    useGSAP(() => {
        timeline.to("#yellow-box", {
            rotation: 360,
            x: 250,
            background: 'red',
            borderRadius: '100%',
            duration: 2,
            ease: "back.inOut",
        });

        timeline.to("#yellow-box", {
            rotation: 720,
            x: 250,
            y: 250,
            background: 'blue',
            borderRadius: '0%',
            duration: 1,
            ease: "back.out",
        });

        timeline.to("#yellow-box", {
            rotation: 360,
            x: 0,
            y: 250,
            background: 'yellow',
            borderRadius: '100%',
            duration: 2,
            ease: "back.inOut",
        });

        timeline.to("#yellow-box", {
            rotation: 0,
            x: 0,
            y: 0,
            background: 'green',
            borderRadius: '0%',
            duration: 1,
            ease: "back.out",
        });
    });

    const togglePlayPause = () => {

        if (timeline.paused()) {
            timeline.resume(); // Resume the timeline
        } else {
            timeline.pause(); // Pause the timeline
        }
    };

    return (
        <main>
            <h1>GsapTimeline</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.timeline()</code> method is used to create a timeline
                instance that can be used to manage multiple animations.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.timeline()</code> method is similar to the{" "}
                <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
                <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
                <code>gsap.timeline()</code> method is used to create a timeline
                instance that can be used to manage multiple animations, while the{" "}
                <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
                <code>gsap.fromTo()</code> methods are used to animate elements from
                their current state to a new state, from a new state to their current
                state, and from a new state to a new state, respectively.
            </p>

            <p className="mt-5 text-gray-500">
                Read more about the{" "}
                <a
                  href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  gsap.timeline()
                </a>{" "}
                method.
            </p>

            <div className="mt-20 space-y-10">
                <button onClick={togglePlayPause}>Play/Pause</button>

            <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
            </div>
        </main>
    );
};

export default GsapTimeline;
