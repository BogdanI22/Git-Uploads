import homePage from '../assets/food-home-page.png'
import './Home.css'


function Home(){

    return(
        <div className='homePage'>
            <img src={homePage} alt = "HomePagePhoto" className='homePagePhoto'></img>
            <div className='paragraph'>
                <h1>The Importance of Calorie Counting</h1>
                <p>Assuming that you have had some experience building muscle and losing weight, you would know that eating the right foods is critical to expecting proper fitness results. Proper intake of macronutrients is important for burning fat, building muscle, and revving up the metabolic rate to burn more calories. However, despite eating the healthiest of foods, without giving any consideration to the quantity of what you eat, you are bound to hinder your fitness goals.
                This is where calorie counting is important. Truth be told, not many of prefer the idea of measuring every grain of food we put into our mouths. But for achieving a specific kind of physique, whether it is lean muscle or mass gain, experts will tell you that keeping count of calorie provides a good foundation to see consistent progress.</p>
            </div>
            <div className='paragraph'>
                <h1>What Is Calorie Counting?</h1>
                <p>Counting calories is monitoring how much food you should consume in accordance with their number of calories. It is often used for weight loss as well as for gaining muscle mass. The idea is that by consuming less than our daily calorie intake, we achieve a calorie deficit to help lose body fat. If one intends to gain muscle mass, the goal is to achieve a calorie surplus to gain additional weight. Calorie counting is important if you want to lose weight or gain weight. Calorie consumption is directly relation to weight gain and weight loss. This is why hitting your calorie target is important.
                Calorie counting is one of the most popular methods for managing weight. The idea is simple: by tracking the number of calories you eat each day, you can create a calorie deficit and lose weight. There are a number of ways to count calories, including online calorie calculators and apps. calorie counting can be an effective weight loss strategy, but it’s not without its drawbacks. One downside is that it can be time consuming to track every calorie. Another is that it can lead to restrictive eating habits and an unhealthy focus on food. If you’re thinking about trying calorie counting, talk to your doctor or a registered dietitian first to make sure it’s right for you.</p>
            </div>
            <div className='paragraph'>
                <h1>Tracking calories</h1>
                <p>racking calories is key to your body weight goals. Eating more calories might be a good idea if your goal is to increase muscle mass and eating fewer calories is a good idea if your goal is to lose body weight. If you want to eat fewer calories calories you’ll need to log your food using a notebook or an app like my fitness pal. Tracking your food will help you see exactly how many calories you’re eating and will help you stay in a calorie deficit.
                Side note: If you have an unhealthy relationship with food or suffer from disordered eating it might be a good idea to talk to a professional about your eating goals. Eating disorders can be triggered when some people start a nutrition plan.</p>
            </div>
        </div>
    )


}
export default Home;