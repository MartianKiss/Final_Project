import { useState } from "react";
import DatePicker from "react-datepicker";
import "../../styling/rezervForm.css"; // Importă stilurile pentru calendar
import "react-datepicker/dist/react-datepicker.css";

const RezervForm = () => {
//   const [startDate, setStartDate] = useState(null); // Stochează data selectată
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rezervarea a fost trimisă!\nNume: ${name}\nEmail: ${email}\nData sosirii: ${startDate?.toLocaleDateString()}\nNumăr de persoane: ${guests}`);
  };
  const [startDate, setStartDate] = useState(new Date("2024/01/01"));
  const [endDate, setEndDate] = useState(new Date("2024/01/01"));

  return (
    <>
    <form onSubmit={handleSubmit} className="reservation-form">
      <h2>Rezervare la Hotel</h2>

      {/* Nume */}
      <div className="form-group">
        <label htmlFor="name">Nume:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Data sosirii */}
      <div className="form-group">
        <label htmlFor="arrival-date">Data sosirii:</label>
        <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      </div>

      {/* Număr de persoane */}
      <div className="form-group">
        <label htmlFor="guests">Număr de persoane:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          min="1"
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      {/* Trimite formularul */}
      <button type="submit">Trimite Rezervarea</button>
    </form>
    </>
  );
};

export default RezervForm;