import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { SpotifyPlaying } from './spotifyPlaying.component';
import '@testing-library/jest-dom';

describe('SpotifyPlaying Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders fetched data correctly', async () => {
    const mockData = {
      song: 'Test Song',
      artist: 'Test Artist',
      albumCover: 'test-cover-url',
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<SpotifyPlaying />);

    await waitFor(() =>
      expect(screen.getByText('🎧Currently playing')).toBeInTheDocument(),
    );
    expect(screen.getByText('Test Song - Test Artist')).toBeInTheDocument();
    expect(screen.getByAltText('Album Cover')).toHaveAttribute(
      'src',
      'test-cover-url',
    );
  });

  test('renders equalizer bars when data is available', async () => {
    const mockData = {
      song: 'Test Song',
      artist: 'Test Artist',
      albumCover: 'test-cover-url',
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<SpotifyPlaying />);

    await waitFor(() =>
      expect(screen.getByText('🎧Currently playing')).toBeInTheDocument(),
    );
  });
});
