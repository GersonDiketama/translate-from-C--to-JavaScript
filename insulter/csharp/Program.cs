using System;
using System.Collections.Generic;

namespace insults
{
    class Program
    {
        static void Main(string[] args)
        {


            List<string> insults = new List<string>()
            {
                  "You look like what morning breath smells like.",
    "If you tried to give me cpr I would probably throw myself back under water",
    "I am not a fan of you",
    "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
    "I'd rather walk than be on the same plane as you",
    "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
    "Do you have to be so...like that?"
            };


            List<int> indexes = new List<int>()
            { };

            // This code ensures we don't end up with duplicate insults
            while (indexes.Count < 3)
            {
                int candidate = getRandomInt(0, (insults.Count));
                if (!indexes.Contains(candidate))
                {
                    indexes.Add(candidate);
                }
            }

            //this for loop iterates throught the indexes array and display to console
            for (int i = 0; i < indexes.Count; i++)
            {
                int index = indexes[i];
                Console.WriteLine(insults[index]);
            }


            //I removed the duplicate math random multiplier
            int getRandomInt(int min, int max)
            {
                return new Random().Next(min, max);

            }



        }
    }
}
