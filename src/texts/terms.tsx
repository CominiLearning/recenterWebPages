export const terms_and_conditions_text = (
    <>
      <div>
        <strong>Terms and Conditions</strong>
      </div>
      Welcome to Recenter! By using our Chrome extension, you agree to be bound by the following terms and conditions. Please read them carefully.
  
      <div>
        <strong>User Data</strong>
      </div>
      Recenter monitors and locally stores data about your browsing habits, including the URLs you visit and the time spent on each site. This data is stored only on your local device and is not transmitted to any external servers. 
  
      <div>
        <strong>Site Categorization</strong>
      </div>
      Recenter categorizes websites into three categories based on productivity:
      <ul>
        <li>Productive: Work/productivity sites</li>
        <li>Wasteful: Time-wasting sites</li>
        <li>Unsure: Sites with mixed use cases</li>
      </ul>
  
      Site categorization happens using one of two methods:
      <ol>
        <li>A pre-tagged list of sites stored in local storage</li>
        <li>Using the OpenAI API (if you provide an API key) to categorize uncategorized sites</li>
      </ol>
  
      <div>
        <strong>Textual Summaries</strong>
      </div>
      If you provide an OpenAI API key, Recenter can generate textual summaries of your browsing activity using the OpenAI language model. These include:
      <ul>
        <li>Daily Recap: Summary of the previous day's browsing</li>
        <li>Hourly Summaries: Summary of each hour's browsing</li>
      </ul>
  
      To generate summaries, Recenter requires access to your detailed browsing history, which is processed locally and sent to OpenAI for summarization. Summaries are stored locally only.
  
      <div>
        <strong>Productivity Features</strong>
      </div>
      Recenter provides several features to help increase productivity:
      <ul>
        <li>Superfocus Mode: Block wasteful sites temporarily</li>
        <li>Wasteful Site Time Limits: Limit daily time on wasteful sites</li>
        <li>Alerts/Warnings: Periodic pop-ups on non-productive sites</li>
        <li>Daily/Hourly Pop-ups: Summary of productive time</li>
        <li>Distracting Site Timer: Shows time wasted on wasteful sites</li>
        <li>Weekly Productivity Badges: Achievements for consistent focus</li>
      </ul>
  
      If using an OpenAI API key, Recenter estimates the cost of API usage.
  
      <div>
        <strong>Data Privacy</strong>
      </div>
      Recenter does not collect or transmit any personally identifiable information. All user data is stored locally and never sold or shared. For OpenAI API usage, we comply with OpenAI's data privacy terms.
  
      By using Recenter, you consent to this local storage and processing of your anonymized browsing data as needed for the extension's functionality.
    </>
  );
  