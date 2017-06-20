d=`cat senhas.json | wc -c`
while :
do
	c=`cat senhas.json | wc -c`
	FILE=senhas.json
	if [ -e "$FILE" ]
	then
		if [ $c -gt $d ];
		then
			a=`cat senhas.json | cut -d"]" -f1`
			b=`cat senhas.json | cut -d"]" -f2 | tail -n1`
			echo $a >> senhas-shell.json
			echo "," >> senhas-shell.json
			echo $b "]"  >> senhas-shell.json
			mv senhas-shell.json senhas.json
			c=`cat senhas.json | wc -c`
			d=$c
#			echo "Feito!"
#			echo $c  $d
			sleep 5
		fi
#		echo "."
	fi
done
