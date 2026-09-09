const supabaseUrl = 'https://dmrywnqulejjigukkdeh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtcnl3bnF1bGVqamlndWtrZGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzI2OTIsImV4cCI6MjA4OTkwODY5Mn0.jHTUbvwegoV0Ds4uyHtaTjqyQ0wC92YkKdYa3wbSGc0';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;

    // Search the 'farmers' table for a match
    const { data, error } = await _supabase
        .from('farmers')
        .select('*')
        .eq('mobile_number', mobile)
        .eq('password', password)
        .single();

    if (error || !data) {
        alert("Invalid mobile number or password");
    } else {
        alert("Login Successful! Welcome " + data.full_name);
        window.location.href = "dashboard.html";
    }
});