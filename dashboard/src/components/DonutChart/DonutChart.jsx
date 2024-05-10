import React from 'react';
import PropTypes from 'prop-types';
import './DonutChart.css';
const DonutChart = ({
  current,
  total,
  size = 100,
  strokeWidth = 10,
  activeColor = "white",
  baseColor = "gray-400",
  MainIcon,
  icon1,
  icon2,
  icon3,
  title1 = "",
  title2 = "",
  title3 = "",
  MainText = "ss",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = ((current / total) * circumference).toFixed(2);

  return (
    <div className="relative p-5 bg  shadow rounded-2xl">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-7xl  -translate-y-1/2 opacity-10">
        {MainIcon}
      </div>
      <div className="flex items-center justify-between">
        <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
          <div className="text-4xl flex items-center justify-center">
            {MainIcon}
          </div>
          <p className="flex items-center justify-center ml-2 text-2xl mb-1">{MainText}</p>
        </div>
        <div className="flex justify-end items-center gap-10   w-full">
          <div className="flex flex-col items-center w-6 h-6">
             
            <div className="w-[20px] h-[20px] flex items-center justify-center">
                {icon1}
            </div>
                <span className="text-xs flex"> <nobr>{title1}</nobr> </span>
          </div>
          <div className="flex flex-col items-center w-6 h-6">
            <div className="w-[20px] h-[20px] flex items-center justify-center">
                {icon1}
            </div>
                <span className="text-xs flex gap-2"><nobr>{title2}</nobr></span>
          </div>
          <div className="flex flex-col items-center w-6 h-6">
            <div className="w-[20px] h-[20px] flex items-center justify-center">
                {icon1}
            </div>
            <span className="text-xs"><nobr>{title3}</nobr></span>
          </div>
          </div>
      </div>

      <div className="mt-3">
       
        <div className="flex justify-start items-center mt-5">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={baseColor}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
            />
            <text
              x="50%"
              y="50%"
              alignmentBaseline="central"
              textAnchor="middle"
              fill={activeColor}
              fontSize="18"
              fontFamily="Arial, sans-serif"
            >
              {`${current} / ${total}`}
            </text>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={activeColor}
              strokeWidth={strokeWidth}
              strokeDasharray={`${progress} ${circumference}`}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  activeColor: PropTypes.string,
  baseColor: PropTypes.string,
  MainIcon: PropTypes.element,
  icon1: PropTypes.element,
  icon2: PropTypes.element,
  icon3: PropTypes.element,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
};

export default DonutChart;
