import { render, screen } from '@testing-library/react';
import ExampleProjects from './exampleProjects.component';

describe('ExampleProjects', () => {
  test('renders project titles', () => {
    render(<ExampleProjects />);

    const projectTitles = screen.getAllByRole('link', { name: /project/i });
    expect(projectTitles).toHaveLength(4);
    expect(projectTitles[0]).toHaveTextContent('Sudoku Solver');
    expect(projectTitles[1]).toHaveTextContent('Spam Filtering');
    expect(projectTitles[2]).toHaveTextContent('Graph & Minimum Spanning tree');
    expect(projectTitles[3]).toHaveTextContent(
      'Mental Health Hackathon Project',
    );
  });

  test('renders project descriptions', () => {
    render(<ExampleProjects />);

    const projectDescriptions = screen.getAllByLabelText(/description/i);
    expect(projectDescriptions).toHaveLength(4);
    expect(projectDescriptions[0]).toHaveTextContent(
      /sudoku solving implementation/i,
    );
    expect(projectDescriptions[1]).toHaveTextContent(
      /spam filter which used naive bayes/i,
    );
    expect(projectDescriptions[2]).toHaveTextContent(
      /program allows for the visualisation/i,
    );
    expect(projectDescriptions[3]).toHaveTextContent(
      /lets you write messages to others/i,
    );
  });
});
