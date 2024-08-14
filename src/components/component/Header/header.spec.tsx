import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './header.component';
import { ThemeProvider } from 'next-themes';

describe('Header', () => {
  it('renders the Home link', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('renders the LinkedIn link', () => {
    render(<Header />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
  });

  it('renders the GitHub link', () => {
    render(<Header />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
  });
});
