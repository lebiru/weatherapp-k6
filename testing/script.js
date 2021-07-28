import http from 'k6/http';
import { sleep, check } from 'k6';
export let options = {
  insecureSkipTLSVerify: true,
  stages: [
    { duration: '30s', target: 5}
  ]
};

export default function() {
  let res = http.get('https://localhost:5001/weatherforecast');
  check(res, {'status was 200': (r) => r.status == 200 });
  sleep(1);
}
