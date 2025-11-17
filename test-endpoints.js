const http = require('http');

// Test function to make HTTP requests
function testEndpoint(path, method = 'GET') {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        console.log(`\n=== Testing ${method} ${path} ===`);
        console.log(`Status: ${res.statusCode}`);
        console.log(`Response: ${data.substring(0, 200)}${data.length > 200 ? '...' : ''}`);
        resolve({ status: res.statusCode, data });
      });
    });

    req.on('error', (err) => {
      console.log(`Error testing ${path}:`, err.message);
      reject(err);
    });

    req.end();
  });
}

// Test main endpoints
async function runTests() {
  try {
    await testEndpoint('/');
    await testEndpoint('/products');
    await testEndpoint('/productsCategory');
    await testEndpoint('/orders');
    await testEndpoint('/customers');
    await testEndpoint('/users');
    await testEndpoint('/blogs');
    await testEndpoint('/teams');
    
    console.log('\n=== All tests completed ===');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

runTests();