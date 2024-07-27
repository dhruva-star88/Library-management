import React from 'react';
import { motion } from 'framer-motion';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const InfoSection = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Why Our Library?</Card.Title>
          <Card.Text>
            Our library provides a quiet and comfortable space for students to study and research. With a vast collection of books and resources, it supports academic excellence and lifelong learning.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default InfoSection;
