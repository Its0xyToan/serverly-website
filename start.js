process.env.TZ = 'Europe/Paris';
import { exec } from 'child_process'

console.log('Building Website...');

exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
}).on('exit', () => {
  console.log("Starting Website...")
  exec('npm run start', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});
