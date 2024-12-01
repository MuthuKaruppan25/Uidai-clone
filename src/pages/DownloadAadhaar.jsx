import React, { useState } from "react";
import { useEffect, useRef} from "react";
const DownloadAadhaar = () => {
  const [selectedOption, setSelectedOption] = useState("aadhaar");
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [repeatedKeyCount, setRepeatedKeyCount] = useState(0);
  const [keystrokes, setKeystrokes] = useState(0);
  const [startTime1, setStartTime1] = useState(null);
  let lastKeystrokeTime = useRef(null);
  const [intervals, setIntervals] = useState([]);
  const [fieldData, setFieldData] = useState([]);
  const [scrollData, setScrollData] = useState([]);
  const [scrollStartTime, setScrollStartTime] = useState(0);
  const [clickData, setClickData] = useState([]);
  const [mouseMovement, setMouseMovement] = useState([]);
  const [keyHoldData, setKeyHoldData] = useState({});
  const [startTime, setStartTime] = useState(0);
  const [paste,setPaste] = useState(0);
  useEffect(() => {
    // Define the paste event handler
    const handlePaste = () => {
      setPaste(1);
      
    };

    // Add the paste event listener to the document
    document.addEventListener("paste", handlePaste);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);
  useEffect(() => {
    let lastKey = null;
    let lastKeyTime = 0;

    const handleKeyDown = (event) => {
      const currentTime = new Date().getTime();
      const currentKey = event.key;

      if (currentKey === "Backspace") {
        setBackspaceCount((prev) => prev + 1);
      }

      if (lastKey === currentKey && currentTime - lastKeyTime < 300) {
        setRepeatedKeyCount((prev) => prev + 1);
      }

      lastKey = currentKey;
      lastKeyTime = currentTime;
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    const handleFocus = (event) => {
      if (
        (event.target.tagName === "INPUT" && 
        event.target.type !== "radio" && 
        event.target.type !== "checkbox") || 
        event.target.tagName === "TEXTAREA"
      ) {
        setStartTime1(Date.now());
        setKeystrokes(0);
        setIntervals([]);
      }
    };
  
    const handleInput = (event) => {
      if (
        (event.target.tagName === "INPUT" && 
        event.target.type !== "radio" && 
        event.target.type !== "checkbox") || 
        event.target.tagName === "TEXTAREA"
      ) {
        setKeystrokes((prev) => prev + 1);
        const currentTime = Date.now();
  
        if (lastKeystrokeTime.current) {
          const timeInterval = currentTime - lastKeystrokeTime.current;
          setIntervals((prev) => [...prev, timeInterval]);
        }
  
        lastKeystrokeTime.current = currentTime;
      }
    };
  
    const handleBlur = (event) => {
      if (
        (event.target.tagName === "INPUT" && 
        event.target.type !== "radio" && 
        event.target.type !== "checkbox") || 
        event.target.tagName === "TEXTAREA"
      ) {
        const endTime = Date.now();
        const timeSpent = (endTime - startTime1) / 1000;
  
        setFieldData((prevData) => [
          ...prevData,
          {
            fieldName: event.target.name,
            keystrokes,
            timeSpent,
            intervals,
            startTime1,
            endTime,
          },
        ]);
  
        console.log(`Field: ${event.target.name}`);
        console.log(`Keystrokes: ${keystrokes}`);
        console.log(`Time Spent: ${timeSpent} seconds`);
      }
    };
  
    document.addEventListener("focus", handleFocus, true);
    document.addEventListener("input", handleInput, true);
    document.addEventListener("blur", handleBlur, true);
  
    return () => {
      document.removeEventListener("focus", handleFocus, true);
      document.removeEventListener("input", handleInput, true);
      document.removeEventListener("blur", handleBlur, true);
    };
  }, [keystrokes, startTime1]);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const timestamp = Date.now();
      const documentHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;

      const scrollDepth = Math.min(
        (currentScrollPosition / (documentHeight - viewportHeight)) * 100,
        100
      );

      const scrollInfo = {
        timestamp: timestamp,
        scrollPosition: currentScrollPosition,
        scrollDepth: scrollDepth,
        scrollSpeed: 0,
        scrollDirection: "none",
      };

      if (scrollData.length > 0) {
        const lastScroll = scrollData[scrollData.length - 1];
        const timeElapsed = (timestamp - lastScroll.timestamp) / 1000;
        const distanceScrolled = Math.abs(
          currentScrollPosition - lastScroll.scrollPosition
        );
        scrollInfo.scrollSpeed = distanceScrolled / timeElapsed;

        if (currentScrollPosition > lastScroll.scrollPosition) {
          scrollInfo.scrollDirection = "down";
        } else if (currentScrollPosition < lastScroll.scrollPosition) {
          scrollInfo.scrollDirection = "up";
        } else {
          scrollInfo.scrollDirection = "none";
        }
      }

      setScrollData((prevData) => [...prevData, scrollInfo]);
    };

    setScrollStartTime(Date.now());
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollData]);

  useEffect(() => {
    const analyzeScrollBehavior = () => {
      if (scrollData.length < 2) return;

      const suspiciousPattern = scrollData.every((data, index) => {
        if (index === 0) return true;
        const prevData = scrollData[index - 1];
        const speedDifference = Math.abs(
          data.scrollSpeed - prevData.scrollSpeed
        );

        const consistentSpeed = speedDifference < 10;

        const directionPattern = scrollData.map((data) => data.scrollDirection);
        const directionChanges = new Set(directionPattern).size;

        return consistentSpeed && directionChanges <= 1;
      });

      const maxScrollDepth = Math.max(
        ...scrollData.map((data) => data.scrollDepth)
      );
      const timeSpentScrolling = (Date.now() - scrollStartTime) / 1000;

      const fastScrollToBottom = maxScrollDepth > 90 && timeSpentScrolling < 5;

      if (suspiciousPattern || fastScrollToBottom) {
        localStorage.setItem("ScrollData", JSON.stringify(scrollData));
        console.log(
          "Suspicious scrolling behavior detected, possible bot activity."
        );
      }
    };

    const scrollBehaviorInterval = setInterval(analyzeScrollBehavior, 5000);

    return () => clearInterval(scrollBehaviorInterval);
  }, [scrollData, scrollStartTime]);
  useEffect(() => {
    const handleClick = (event) => {
      const clickInfo = {
        timestamp: Date.now(),
        x: event.clientX,
        y: event.clientY,
        element: event.target.tagName,
      };
      setClickData((prevClickData) => [...prevClickData, clickInfo]);
    };
    const delayThreshold = 1000;
    let lastRecordedTime = Date.now();

    const handleMouseMove = (event) => {
      const currentTime = Date.now();

      if (currentTime - lastRecordedTime >= delayThreshold) {
        setMouseMovement((prev) => [
          ...prev,
          { x: event.clientX, y: event.clientY, timestamp: currentTime },
        ]);
        lastRecordedTime = currentTime;
      }
    };

    document.addEventListener("click", handleClick);

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("clickPatterns", JSON.stringify(clickData));
      localStorage.setItem("mouseMovements", JSON.stringify(mouseMovement));
    });
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [clickData, mouseMovement]);
  const calculateMouseSpeedStd = (mouseData) => {
    if (mouseData.length < 2) {
      return { avgSpeed: 0, totalDistance: 0, avgAngleChange: 0 };
    }

    var totalDistance = 0;
    var totalTime =
      mouseData[mouseData.length - 1].timestamp - mouseData[0].timestamp;
    var speedList = [];
    var angleChanges = [];

    for (var i = 1; i < mouseData.length; i++) {
      var x1 = mouseData[i - 1].x;
      var y1 = mouseData[i - 1].y;
      var x2 = mouseData[i].x;
      var y2 = mouseData[i].y;

      var timeDiff = mouseData[i].timestamp - mouseData[i - 1].timestamp;

      if (timeDiff === 0) continue;

      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      totalDistance += distance;

      var speed = distance / timeDiff;
      speedList.push(speed);

      if (i > 1) {
        var x0 = mouseData[i - 2].x;
        var y0 = mouseData[i - 2].y;
        var angle1 = Math.atan2(y1 - y0, x1 - x0);
        var angle2 = Math.atan2(y2 - y1, x2 - x1);
        var angleChange = Math.abs(angle2 - angle1);
        angleChanges.push(angleChange);
      }
    }

    var avgSpeed =
      speedList.length > 0
        ? speedList.reduce((a, b) => a + b, 0) / speedList.length
        : 0;
    var avgAngleChange =
      angleChanges.length > 0
        ? angleChanges.reduce((a, b) => a + b, 0) / angleChanges.length
        : 0;

    return {
      avgSpeed: avgSpeed,
      totalDistance: totalDistance,
      avgAngleChange: avgAngleChange,
    };
  };
  const calculateJitterAndTremors = (mouseData) => {
    if (mouseData.length < 3) {
      return { jitter: 0, tremors: 0 };
    }

    var jitterDistances = [];
    var tremorCounts = 0;

    for (var i = 2; i < mouseData.length; i++) {
      var x1 = mouseData[i - 2].x;
      var y1 = mouseData[i - 2].y;
      var x2 = mouseData[i - 1].x;
      var y2 = mouseData[i - 1].y;
      var x3 = mouseData[i].x;
      var y3 = mouseData[i].y;

      var dist1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      var dist2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));

      var distanceDiff = Math.abs(dist2 - dist1);
      if (distanceDiff > 0 && distanceDiff < 5) {
        jitterDistances.push(distanceDiff);
      }
      var angle1 = Math.atan2(y2 - y1, x2 - x1);
      var angle2 = Math.atan2(y3 - y2, x3 - x2);
      var angleChange = Math.abs(angle2 - angle1);

      if (angleChange > Math.PI / 2) {
        tremorCounts++;
      }
    }
    var jitter =
      jitterDistances.length > 0
        ? jitterDistances.reduce((a, b) => a + b, 0) / jitterDistances.length
        : 0;
    var tremors = tremorCounts;
    return { jitter: jitter, tremors: tremors };
  };
  const calculateClickIntervalAvg = (clickData) => {
    const intervals = [];
    for (let i = 1; i < clickData.length; i++) {
      const interval = clickData[i].timestamp - clickData[i - 1].timestamp;
      intervals.push(interval);
    }
    return intervals.length > 0
      ? intervals.reduce((a, b) => a + b, 0) / intervals.length
      : 0;
  };
  const calculateClickAreaVariability = (clickData) => {
    if (clickData.length < 2) {
      return { xVariance: 0, yVariance: 0, totalVariance: 0 };
    }

    const xCoords = clickData.map((click) => click.x);
    const yCoords = clickData.map((click) => click.y);

    const calculateVariance = (values) => {
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      return (
        values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
        values.length
      );
    };

    const xVariance = calculateVariance(xCoords);
    const yVariance = calculateVariance(yCoords);

    const totalVariance = Math.sqrt(xVariance + yVariance);

    return {
      xVariance: xVariance,
      yVariance: yVariance,
      totalVariance: totalVariance,
    };
  };
  const calculateScrollSpeedAvg = (scrollData) => {
    const speeds = [];
    for (let i = 1; i < scrollData.length; i++) {
      const distance =
        scrollData[i].scrollPosition - scrollData[i - 1].scrollPosition;
      const dt = scrollData[i].timestamp - scrollData[i - 1].timestamp;

      if (dt > 0 && !isNaN(distance) && !isNaN(dt)) {
        const speed = distance / dt;
        speeds.push(speed);
      }
    }
    return speeds.length > 0
      ? speeds.reduce((a, b) => a + b, 0) / speeds.length
      : 0;
  };
  const calculateAverageTypingSpeed = (typingSpeeds) => {
    const totalTimeSpent = fieldData.reduce(
      (total, data) => total + data.timeSpent,
      0
    );
    const averageTimeSpent = totalTimeSpent / fieldData.length;
    return averageTimeSpent;
  };
  const concatenateFieldData = (data) => {
    const result = {};

    data.forEach((entry) => {
      const {
        fieldName,
        intervals,
        keystrokes,
        timeSpent,
        startTime1,
        endTime,
      } = entry;

      if (!result[fieldName]) {
        result[fieldName] = {
          fieldName: fieldName,
          intervals: [...intervals],
          keystrokes: keystrokes,
          timeSpent: timeSpent,
          startTime1: startTime1,
          endTime: endTime,
        };
      } else {
        result[fieldName].intervals =
          result[fieldName].intervals.concat(intervals);
        result[fieldName].keystrokes += keystrokes;
        result[fieldName].timeSpent += timeSpent;
        result[fieldName].startTime1 = Math.min(
          result[fieldName].startTime1,
          startTime1
        );
        result[fieldName].endTime = Math.max(
          result[fieldName].endTime,
          endTime
        );
      }
    });
    let concatenatedData = Object.values(result);
    concatenatedData.sort((a, b) => a.startTime1 - b.startTime1);
    const fieldIntervals = [];
    let totalInterval = 0;
    for (let i = 1; i < concatenatedData.length; i++) {
      const previousField = concatenatedData[i - 1];
      const currentField = concatenatedData[i];
      const timeInterval =
        (currentField.startTime1 - previousField.endTime) / 1000;
      totalInterval += timeInterval;
      console.log(timeInterval);

      fieldIntervals.push({
        fromField: previousField.fieldName,
        toField: currentField.fieldName,
        timeInterval: timeInterval,
      });
    }
    const averageInterval =
      fieldIntervals.length > 0 ? totalInterval / fieldIntervals.length : 0;

    return {
      concatenatedData,
      averageInterval: averageInterval,
    };
  };
  const calculateStatistics = () => {
    const durations = Object.values(keyHoldData)
      .map((data) => data.holdDuration)
      .filter((duration) => duration > 0);

    if (durations.length === 0) return { avgDuration: 0, stdDev: 0 };

    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;

    const variance =
      durations.reduce((a, b) => a + Math.pow(b - avgDuration, 2), 0) /
      durations.length;
    const stdDev = Math.sqrt(variance);

    return { avgKeyHoldDurarion: avgDuration, avdStdKeyHoldDev: stdDev };
  };

  const calculateAverageKeystrokeInterval = (data) => {
    const avgIntervals = [];
    let totalTimeSpent = 0;
    data.forEach((field) => {
      const intervals = field.intervals;
      console.log("Field Interval",intervals);
      const avgInterval =
        intervals.reduce((sum, value) => sum + value, 0) / intervals.length;
      totalTimeSpent += field.timeSpent;
      avgIntervals.push(avgInterval);
      console.log(
        `Average keystroke interval for ${
          field.fieldName
        }: ${avgInterval.toFixed(2)}`
      );
    });
    const avgTimeSpent = totalTimeSpent / data.length;
    const overallAvgInterval =
      avgIntervals.reduce((sum, value) => sum + value,0) / avgIntervals.length;
    console.log(
      `Overall average keystroke interval: ${overallAvgInterval.toFixed(2)}`
    );

    return {
      avgTimeSpent: avgTimeSpent,
      avgIntervals: avgIntervals,
      overallAvgInterval: overallAvgInterval,
    };
  };

  useEffect(() => {
    const entryTime = Date.now();
    setStartTime(entryTime);

  }, []);
  const handleSubmit = (event) => {

    event.preventDefault();

    const mouseSpeedStd = calculateMouseSpeedStd(mouseMovement);
    const jittersandTremors = calculateJitterAndTremors(mouseMovement);
    const clickIntervalAvg = calculateClickIntervalAvg(clickData);
    const variableData = calculateClickAreaVariability(clickData);
    const concatenatedData = concatenateFieldData(fieldData);
    const scrollSpeedAvg = calculateScrollSpeedAvg(scrollData);
    const averageTypingSpeed = calculateAverageTypingSpeed(fieldData);
    const keyHoldValues = calculateStatistics(keyHoldData);
    const averageTimeSpent = (Date.now() - startTime) / 1000;
    const keyFieldData = calculateAverageKeystrokeInterval(
      concatenatedData.concatenatedData
    );

    console.log("Mouse Speed Standard Deviation:", mouseSpeedStd.avgSpeed);
    console.log(
      "Mouse Speed Standard angle change:",
      mouseSpeedStd.avgAngleChange
    );
    console.log("Mouse Jitters", jittersandTremors.jitter);
    console.log("Mouse Tremors", jittersandTremors.tremors);
    console.log("x Variance", variableData.xVariance);
    console.log("y Variance", variableData.yVariance);
    console.log("total Variance", variableData.totalVariance);
    console.log("key hold values duration", keyHoldValues.avgKeyHoldDurarion);
    console.log("key hold values SD", keyHoldValues.avdStdKeyHoldDev);
    console.log("Average Click Interval:", clickIntervalAvg);
    console.log("Average Scroll Speed:", scrollSpeedAvg);
    console.log("Field Data", fieldData);
    console.log("Average Key Stroke Interval", keyFieldData.overallAvgInterval);
    console.log(
      "Average Typing Speed:",
      averageTypingSpeed,
      "keystrokes per second"
    );
    console.log("Average time spent on Each field", keyFieldData.avgTimeSpent);
    console.log(
      "Average time spent between each field",
      concatenatedData.averageInterval
    );
    console.log("Backspace count", backspaceCount);
    console.log("RepeatedValues count", repeatedKeyCount);
    console.log(`Average time spent on all pages: ${averageTimeSpent} seconds`);

    const features = {
      mouseSpeed: parseFloat(mouseSpeedStd.avgSpeed),
      mouseAngle: parseFloat(mouseSpeedStd.avgAngleChange),
      mouseTremors: jittersandTremors.tremors,
      mouseJitters: jittersandTremors.jitter,
      xVariance: variableData.xVariance,
      yVariance: variableData.yVariance,
      totalVariance: variableData.totalVariance,
      keyHoldDuration: keyHoldValues.avgKeyHoldDurarion,
      keyHoldStd: keyHoldValues.avdStdKeyHoldDev,
      clickIntervalAvg: clickIntervalAvg,
      scrollSpeedAvg: scrollSpeedAvg,
      keyStrokeInterval: keyFieldData.overallAvgInterval,
      avgTimeSpentField: keyFieldData.avgTimeSpent,
      averageTimeInterval: parseFloat(concatenatedData.averageInterval),
      backspaceCount: backspaceCount,
      repeatedKeyCount: repeatedKeyCount,
      averageTimeSpent: averageTimeSpent,
      pasteEvent : paste
    };
    console.log(features);
    console.log(features.averageTimeSpent);
    console.log(features.avgTimeSpentField);
    
    const x = JSON.stringify(features);
    console.log(x);
  
    fetch("https://proofify-clone-server.onrender.com/users/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(features),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
    
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const renderForm = () => {
    switch (selectedOption) {
      case "aadhaar":
        return (
          <div>
            <label
              htmlFor="aadhaarNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Aadhaar Number
            </label>
            <input
              type="text"
              id="aadhaarNumber"
              name="aadhaarNumber"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              placeholder="Enter your Aadhaar number"
            />
          </div>
        );
      case "enrolment":
        return (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="enrolmentId"
                className="block text-sm font-medium text-gray-700"
              >
                Enrolment ID
              </label>
              <input
                type="text"
                id="enrolmentId"
                name="enrolmentId"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
                placeholder="Enter your Enrolment ID"
              />
            </div>
            <div>
              <label
                htmlFor="eidDate"
                className="block text-sm font-medium text-gray-700"
              >
                Select EID Date
              </label>
              <input
                type="date"
                id="eidDate"
                name="eidDate"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="eidTime"
                className="block text-sm font-medium text-gray-700"
              >
                Select EID Time
              </label>
              <input
                type="time"
                id="eidTime"
                name="eidTime"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              />
            </div>
          </div>
        );
      case "vid":
        return (
          <div>
            <label
              htmlFor="vid"
              className="block text-sm font-medium text-gray-700"
            >
              Virtual ID
            </label>
            <input
              type="text"
              id="vid"
              name="vid"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-4 py-2"
              placeholder="Enter your Virtual ID"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb */}
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto px-6 text-sm">
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / Download Aadhaar
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-100 border-l-4 m-5 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-md">
        <p className="font-medium text-center">
          ⚠️ Disclaimer: This site is an independent platform created for
          analyzing behavioral patterns. It is not affiliated with or endorsed
          by the Government of India or UIDAI. We do not collect, store, or
          process any personal or sensitive Aadhaar-related information.
        </p>
      </div>

      {/* Main Section */}
      <main className="container mx-auto py-8 px-6">
        <div className="bg-white shadow rounded-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Download Aadhaar
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Please select an option and provide the required details to proceed.
          </p>

          {/* Radio Buttons */}
          <div className="mb-6">
            <fieldset>
              <legend className="text-sm font-medium text-gray-700">
                Select an Option
              </legend>
              <div className="flex text-center">
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="downloadOption"
                    value="aadhaar"
                    checked={selectedOption === "aadhaar"}
                    onChange={() => setSelectedOption("aadhaar")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Aadhaar Number</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="downloadOption"
                    value="enrolment"
                    checked={selectedOption === "enrolment"}
                    onChange={() => setSelectedOption("enrolment")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Enrolment ID</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="downloadOption"
                    value="vid"
                    checked={selectedOption === "vid"}
                    onChange={() => setSelectedOption("vid")}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Virtual ID</span>
                </label>
              </div>
            </fieldset>
          </div>

          {/* Dynamic Form */}
          <form className="space-y-6">
            {renderForm()}

            {/* Captcha */}
           

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Download Aadhaar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DownloadAadhaar;
