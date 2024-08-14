import React from 'react';
import { render, screen } from '@testing-library/react';
import PopupDialog from './popupDialog.component';
import { PopupDialogProp } from './popupDialog.props';

describe('PopupDialog Component', () => {
  const defaultProps: PopupDialogProp = {
    dialogOpen: true,
    setDialogOpen: jest.fn(),
    dialogDescription: 'Test Description',
    dialogTitle: 'Test Title',
  };

  it('renders the dialog with the correct title and description', () => {
    render(<PopupDialog {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
