import React, { useRef, useEffect, useState } from "react";

const Camera = () => {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null)

    useEffect(() => {
        const startCamara = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "Enviroment" },
                });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            }
            catch (err) {
                setError('No se puede acceder a la camara');
                console.error(err);
            }
        }
        startCamara();

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.strop());
            }
        }
    }, []);
    return (
        <div>
            <h2>Acceso Camara</h2>

            <video ref={videoRef} autoPlay playsInline style={{ width: "50%" }} />
        </div>
    )
};

export default Camera;