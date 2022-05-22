using System;
using System.Linq;
using System.Collections.Generic;

namespace exampreparation
{
    class exam
    {
        static void Main(string[] args)
        {
            int times = int.Parse(Console.ReadLine());
            List<string> numbers = Console.ReadLine().Split().ToList();

            int currentIndex = 0;

            for (int i = 0; i < times; i++)
            {
                string[] command = Console.ReadLine().Split().ToArray();

                if (command[0] == "Forward")
                {
                    int steps = int.Parse(command[1]);
                    int index = currentIndex + steps;

                    if (index >= 0 && index < numbers.Count)
                    {
                        numbers.RemoveAt(index);
                        currentIndex = index;
                    }
                }
                else if (command[0] == "Back")
                {
                    int steps = int.Parse(command[1]);
                    int index = currentIndex - steps;

                    if (index >= 0 && index < numbers.Count)
                    {
                        numbers.RemoveAt(index);
                        currentIndex = index;
                    }
                }
                else if (command[0] == "Gift")
                {
                    int index = int.Parse(command[1]);
                    string numb = command[2];
                    if (index >= 0 && index < numbers.Count)
                    {
                        numbers.Insert(index, numb);
                        currentIndex = index;
                    }
                }
                else if (command[0] == "Swap")
                {
                    string num1 = command[1];
                    string num2 = command[2];
                    int index1 = numbers.IndexOf(num1);
                    int index2 = numbers.IndexOf(num2);

                    if (index1 != -1 && index2 != -1)
                    {
                        string temp = numbers[index1];
                        numbers[index1] = numbers[index2];
                        numbers[index2] = temp;
                    }
                }
            }

            Console.WriteLine($"Position: {currentIndex}");
            Console.WriteLine(string.Join(", ", numbers));
        }
    }
}