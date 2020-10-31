package solution

type MyHashSet struct {
	set []bool
}

/** Initialize your data structure here. */
func Constructor() MyHashSet {
	return MyHashSet{set: make([]bool, 1000000)}
}

func (this *MyHashSet) Add(key int) {
	this.set[key] = true
}

func (this *MyHashSet) Remove(key int) {
	this.set[key] = false
}

/** Returns true if this set contains the specified element */
func (this *MyHashSet) Contains(key int) bool {
	return this.set[key]
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(key);
 * obj.Remove(key);
 * param_3 := obj.Contains(key);
 */
