#include <iostream> 
#include <vector>

int FindOutlier(std::vector<int> arr)
{
  int result;
  int a, b, c;
  int parity;
  
  a = abs(arr[0]%2);
  b = abs(arr[1]%2);
  c = abs(arr[2]%2);
  if (a==b || a==c) {
    parity = a;
  } else {
    parity = b;
  }
  
  for (int i = 0; i < arr.size(); i++) {
      if (abs(arr[i]%2) != parity) {
        result = arr[i];
        break;
      }
  }
  return result;
}

int main()
{
    std::cout << FindOutlier({2, 3, 4});
    return 0;
}