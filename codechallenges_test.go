// +build unit

package codechallenges

import (
	"testing"
)

func TestRemoveSpaces(t *testing.T) {
	result := RemoveSpaces("test 1 2 3")
	if result != "test123" {
		t.Error("Expected test123 but got: " + result)
	}
}
