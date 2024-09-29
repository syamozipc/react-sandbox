import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Moment } from 'moment';

function About() {
  const [date, setDate] = useState<Moment | null>();

  const handleChange = (value: Moment | null) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };

  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert
          message="Selected Date"
          description={date ? date.format('YYYY-MM-DD') : 'None'}
        />
      </div>
      <div>
        <Link to="/">go back to the top</Link>
      </div>
    </div>
  );
}

export default About;
