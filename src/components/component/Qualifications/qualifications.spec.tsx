import React from 'react';
import { render, screen } from '@testing-library/react';
import Qualifications from './qualifications.component';
import '@testing-library/jest-dom';

describe('Qualifications Component', () => {
  test('renders section title', () => {
    render(<Qualifications />);
    expect(screen.getByText('Qualifications')).toBeInTheDocument();
  });

  test('renders description paragraph', () => {
    render(<Qualifications />);
    expect(
      screen.getByText(
        /I am currently studying a degree in Computer Science at the University of Bath/,
      ),
    ).toBeInTheDocument();
  });

  test('renders module names and marks correctly', () => {
    render(<Qualifications />);
    const modules = [
      'Computer systems architecture 1 & 2',
      'Discrete mathematics and database',
      'Principles of programming 1 & 2',
      'Mathematics for computation',
      'Artificial intelligence',
      'Software processes and modelling',
      'Extended systems project',
      'Machine learning',
      'Foundations of computation',
      'Visual computing',
      'Data structures and algorithms',
      'Human-computer interaction and user experience',
    ];

    const marks = [
      '81%',
      '95%',
      '81%',
      '76%',
      '84%',
      '68%',
      '82%',
      '92%',
      '84%',
      '75%',
      '98%',
      '84%',
    ];

    modules.forEach((module) => {
      expect(screen.getByText(module)).toBeInTheDocument();
    });

    marks.forEach((mark) => {
      expect(screen.getAllByText(mark)[0]).toBeInTheDocument();
    });
  });
});
