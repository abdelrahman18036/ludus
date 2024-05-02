import React, { useEffect } from 'react';
import '../../assets/styles/style.css';


const CustomCursor = () => {
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [hoverState, setHoverState] = React.useState(false);

    const handleMouseMove = (event) => {
        setCursorPos({ x: event.clientX, y: event.clientY });
    };

    const addHover = () => setHoverState(true);
    const removeHover = () => setHoverState(false);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a, .canvas, .progress-wrap, .wishlist-button,li,.author,img').forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a, .canvas, .progress-wrap, .wishlist-button,li,img').forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return (
        <>
            <div className="tf-mouse tf-mouse-outer" style={{
                transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                opacity: hoverState ? 0 : 0.5,
                visibility: 'visible'
            }} />
            <div className="tf-mouse tf-mouse-inner" style={{
                transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                width: hoverState ? '80px' : '8px',
                height: hoverState ? '80px' : '8px',
                opacity: hoverState ? 0.3 : 1,
                margin: hoverState ? '-40px 0 0 -40px' : '-5px 0 0 -5px',
                backgroundColor: hoverState ? 'rgba(22, 22, 22, 1)' : '#865DFF',
                visibility: 'visible'
            }} />
        </>
    );
};

export default CustomCursor;
