import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Main {
    public static int longestYuanyin(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        Set<Character> set = new HashSet<Character>();
        set.add('A');
        set.add('E');
        set.add('I');
        set.add('O');
        set.add('U');
        set.add('a');
        set.add('e');
        set.add('i');
        set.add('o');
        set.add('u');
        char[] arr = s.toCharArray();
        int start = 0, f = 0;
        int res = 0;
        if (set.contains(arr[start])) {
            res++;
        }
        for (; f < arr.length; ++f) {
            if (!set.contains(arr[f])) {
                start = f;
            } else {
                while (f < arr.length && set.contains(arr[f])) {
                    f++;
                }
                res = Math.max(res, f - start);
            }
        }
        return res == 0 ? 0 : res;
    }

    public static void main(String[] args) {
        String s = "asdbuiodevauufgh";
        System.out.println(longestYuanyin(s));
    }
}