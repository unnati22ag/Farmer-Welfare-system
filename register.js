const supabaseUrl = 'https://dmrywnqulejjigukkdeh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtcnl3bnF1bGVqamlndWtrZGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzI2OTIsImV4cCI6MjA4OTkwODY5Mn0.jHTUbvwegoV0Ds4uyHtaTjqyQ0wC92YkKdYa3wbSGc0';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const farmerData = {
        full_name: document.getElementById("name").value,
        mobile_number: document.getElementById("mobile").value,
        aadhar_number: document.getElementById("aadhar").value,
        state: document.getElementById("state").value,
        land_area: document.getElementById("land").value,
        password: document.getElementById("password").value
    };

    // Basic Validation
    if (farmerData.mobile_number.length !== 10) {
        alert("Mobile number must be 10 digits");
        return;
    }

    // Insert into Supabase 'farmers' table
    const { data, error } = await _supabase
        .from('farmers')
        .insert([farmerData]);

    if (error) {
        alert("Registration Error: " + error.message);
    } else {
        alert("Registration Successful!");
        window.location.href = "login.html";
    }
});