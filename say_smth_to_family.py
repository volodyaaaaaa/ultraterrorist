num=int(input("Enter the the number of family members:"))
count=1
family=dict()      #Creating an empty dictionary
while count<=num:
    name=input("Enter the name of family member:")
    age=(input("Enter what you want to say him/her:"))
    family[name]=age
    count+=1
print("\n\nfamily_member\tage")
for k in family:
 print(k,'\t\t',family[k])

