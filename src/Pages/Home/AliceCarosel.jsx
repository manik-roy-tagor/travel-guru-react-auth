import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const AliceCarosel = () => {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
      ];


    return (
        <div className="w-full bg-white">
            <AliceCarousel
                items={items}
                autoPlay={true}
                autoPlayInterval={3000} // Set the interval in milliseconds
                buttonsDisabled={false} // Enable or disable navigation buttons
                dotsDisabled={false} // Enable or disable pagination dots
                responsive={{
                    0: { items: 1 },
                    600: { items: 2 },
                    1024: { items: 3 },
                }}
            />
        </div>
    );
};

export default AliceCarosel;