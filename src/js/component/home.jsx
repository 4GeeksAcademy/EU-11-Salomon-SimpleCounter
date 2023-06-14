import React from "react";


//create your first component
const Home = () => {
    const [seconds, setSeconds] = useState (0);
        useEffect(() => {
            const interval = setInterval(() => {
            setSeconds((old) => old + 1);
            }, 1000);
            return () => clearInterval(interval);
            }, [setSeconds]);
            return (
            <div className="text-center">
            <Counter time={seconds} />
            <button onClick={() => setSeconds(seconds + 1)}/> 
            </div>
        );
};

export default Home;
