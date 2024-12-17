import React, { useState } from "react";
import { Container, Dropdown, Form } from "react-bootstrap";
import { Filter } from "../content/DynamicContent"; // Import Filter content

function FilterComponent() {
  const [price, setPrice] = useState(Filter.priceRange.min); // Slider state

  const handleSliderChange = (e) => {
    setPrice(e.target.value); // Update slider value dynamically
  };

  return (
    <Container className="p-3 border rounded" style={{ maxWidth: "300px" }}>
      {/* Main Heading */}
      <h5 className="mb-4">{Filter.heading}</h5>

      {/* Popular Anime Dropdown */}
      <div className="mb-4">
        <h6>{Filter.popularAnime.title}</h6>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-anime">
            Select Anime
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Filter.popularAnime.options.map((anime, index) => (
              <Dropdown.Item key={index}>{anime}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Price Range Slider */}
      <div className="mb-4">
        <h6>{Filter.priceRange.title}</h6>
        <div className="d-flex justify-content-between">
          <span>${price}</span>
          <span>${Filter.priceRange.max}</span>
        </div>
        <Form.Range
          min={Filter.priceRange.min}
          max={Filter.priceRange.max}
          value={price}
          onChange={handleSliderChange}
        />
      </div>

      {/* Products Dropdown */}
      <div className="mb-4">
        <h6>{Filter.products.title}</h6>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-products">
            Select Product
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {Filter.products.options.map((product, index) => (
              <Dropdown.Item key={index}>{product}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Size Options */}
      <div>
        <h6>{Filter.size.title}</h6>
        <Form>
          {Filter.size.options.map((size, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              id={`size-${size}`}
              label={size}
            />
          ))}
        </Form>
      </div>
    </Container>
  );
}

export default FilterComponent;
