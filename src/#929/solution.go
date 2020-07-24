package solution

import "strings"

func numUniqueEmails(emails []string) int {
	set := map[string]bool{}
	for _,email := range emails {
		comp := strings.Split(email, "@")
        comp[0] = strings.Replace(comp[0], ".", "", -1)
        comp[0] = strings.Split(comp[0], "+")[0]
        set[strings.Join(comp, "")] = true
	}
	return len(set)
}
