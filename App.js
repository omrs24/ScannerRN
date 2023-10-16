
import React from 'react';
import QRScanner from './src/QRScanner';

export default function App() {
  return <QRScanner />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
