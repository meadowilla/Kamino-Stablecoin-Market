import bs58 from 'bs58';
import * as fs from 'fs';

import 'dotenv/config';

// Replace with your exported private key from Phantom (base58 string)
const base58SecretKey = process.env.PRIVATE_KEY;

try {
  const decoded = bs58.decode(base58SecretKey);
  const secretKey = Array.from(decoded);

  fs.writeFileSync('phantom-mainnet-keypair.json', JSON.stringify(secretKey));
  console.log('✅ Keypair saved to phantom-mainnet-keypair.json');
} catch (err) {
  console.error('❌ Failed to decode and write keypair:', err);
}
